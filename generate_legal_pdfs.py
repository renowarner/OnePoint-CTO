import os
import re
from reportlab.lib.pagesizes import LETTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from svglib.svglib import svg2rlg
from reportlab.graphics.shapes import Drawing, Group
from reportlab.lib.units import inch

def clean_for_xml(text):
    """Sanitize text for ReportLab's XML-based Paragraph parser."""
    text = text.replace('&', '&amp;')
    text = text.replace('<', '&lt;')
    text = text.replace('>', '&gt;')
    # Re-enable specific tags we want
    text = text.replace('&lt;b&gt;', '<b>')
    text = text.replace('&lt;/b&gt;', '</b>')
    text = text.replace('&lt;i&gt;', '<i>')
    text = text.replace('&lt;/i&gt;', '</i>')
    return text

def md_to_pdf_tags(line):
    """Convert basic Markdown bold/italic to HTML tags."""
    # Bold: **text** -> <b>text</b>
    line = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', line)
    # Italic: *text* (but not bullets) -> <i>text</i>
    if not line.strip().startswith('* '):
        line = re.sub(r'\*(.*?)\*', r'<i>\1</i>', line)
    return line

def create_pdf(input_md_path, output_pdf_path, logo_path, title):
    doc = SimpleDocTemplate(output_pdf_path, pagesize=LETTER,
                            rightMargin=72, leftMargin=72,
                            topMargin=50, bottomMargin=72)
    
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Heading1'],
        alignment=TA_CENTER,
        fontSize=20,
        spaceAfter=30,
        textColor='#1A1A1A'
    )
    
    h2_style = ParagraphStyle(
        'H2Style',
        parent=styles['Heading2'],
        fontSize=13,
        spaceBefore=15,
        spaceAfter=8,
        textColor='#2D2D2D'
    )
    
    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontSize=10,
        leading=14,
        spaceAfter=10,
        alignment=TA_LEFT
    )
    
    story = []

    # 1. Add Logo (Centered)
    if os.path.exists(logo_path):
        drawing = svg2rlg(logo_path)
        target_width = 2.0 * inch
        factor = target_width / drawing.width 
        container_width = 6.5 * inch
        x_offset = (container_width - (drawing.width * factor)) / 2
        
        d = Drawing(container_width, drawing.height * factor)
        g = Group(drawing)
        g.transform = (factor, 0, 0, factor, x_offset, 0)
        d.add(g)
        
        story.append(d)
        story.append(Spacer(1, 30))

    # 2. Add Content
    if not os.path.exists(input_md_path):
        print(f"File not found: {input_md_path}")
        return

    with open(input_md_path, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.splitlines()
    for line in lines:
        line = line.strip()
        
        # Explicit page breaks for professional layout
        if line.startswith("## 5.") or line.startswith("## 8."):
             story.append(PageBreak())

        if not line:
            story.append(Spacer(1, 6))
            continue
            
        if line.startswith('# '):
            clean_line = clean_for_xml(line[2:].upper())
            story.append(Paragraph(clean_line, title_style))
        elif line.startswith('## '):
            clean_line = clean_for_xml(line[3:])
            story.append(Paragraph(clean_line, h2_style))
        elif line.startswith('### '):
            clean_line = clean_for_xml(line[4:])
            story.append(Paragraph(f"<b>{clean_line}</b>", body_style))
        elif line.startswith('* '):
            clean_line = clean_for_xml(md_to_pdf_tags(line[2:]))
            story.append(Paragraph(f"&bull; {clean_line}", body_style))
        elif line.startswith('> '):
            quote_style = ParagraphStyle('Quote', parent=body_style, leftIndent=20, italic=True, textColor='#444444')
            clean_line = clean_for_xml(md_to_pdf_tags(line[2:]))
            story.append(Paragraph(clean_line, quote_style))
        else:
            clean_line = clean_for_xml(md_to_pdf_tags(line))
            story.append(Paragraph(clean_line, body_style))

    doc.build(story)
    print(f"Successfully Created: {output_pdf_path}")

if __name__ == "__main__":
    base_path = r"Active Projects\Business Planning"
    # Using Light logo
    logo = os.path.join(base_path, "Branding", "Logo_Nexus_Final_Light.svg")
    
    create_pdf(
        os.path.join(base_path, "Service_Agreement_Template.md"),
        os.path.join(base_path, "OnePoint_CTO_Service_Agreement.pdf"),
        logo,
        "Master Service Agreement"
    )
    
    create_pdf(
        os.path.join(base_path, "Mutual_NDA_Template.md"),
        os.path.join(base_path, "OnePoint_CTO_Mutual_NDA.pdf"),
        logo,
        "Mutual NDA"
    )
