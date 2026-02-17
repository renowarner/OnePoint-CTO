import os
from html2image import Html2Image
from PIL import Image
import re

# Setup paths
base_dir = r'C:\Users\Devlin\Desktop\Gemini\Projects\OnePoint CTO\Branding'
final_dir = os.path.join(base_dir, 'Final Draft of the Logo', 'Favicons')
assets_dir = os.path.join(base_dir, 'Final_Assets')

if not os.path.exists(final_dir):
    os.makedirs(final_dir)

hti = Html2Image(output_path=final_dir)

# Base SVG content for the Icon (already 400x400)
icon_svg_path = os.path.join(assets_dir, 'Logo_Profile_Dark.svg')
with open(icon_svg_path, 'r') as f:
    base_svg = f.read()

def create_favicon_svg(content, type):
    # Remove width/height to let viewBox handle it
    content = re.sub(r'\s(width|height)="\d+"', '', content)
    if 'viewBox' not in content:
        content = content.replace('<svg', '<svg viewBox="0 0 400 400"')
    
    if type == 'light':
        content = content.replace('fill="#0A192F"', 'fill="#F8FAFC"')
        content = content.replace('stroke="#FFFFFF"', 'stroke="#0A192F"')
        content = content.replace('fill="#FFFFFF"', 'fill="#0A192F"')
    elif type == 'transparent':
        content = re.sub(r'<rect width="100%" height="100%" fill="#0A192F"\s?/>', '', content)
        
    return content

favicon_types = [
    {"name": "favicon_dark", "type": "dark", "bg": "#0A192F"},
    {"name": "favicon_light", "type": "light", "bg": "#F8FAFC"},
    {"name": "favicon_transparent", "type": "transparent", "bg": "transparent"}
]

for fav in favicon_types:
    svg_content = create_favicon_svg(base_svg, fav['type'])
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{
                margin: 0;
                padding: 0;
                background-color: {fav['bg']};
                display: flex;
                justify-content: center;
                align-items: center;
                width: 64px;
                height: 64px;
                overflow: hidden;
            }}
            svg {{
                width: 100%;
                height: 100%;
            }}
        </style>
    </head>
    <body>
        {svg_content}
    </body>
    </html>
    """
    
    temp_html = os.path.join(base_dir, f"temp_{fav['name']}.html")
    with open(temp_html, 'w') as f:
        f.write(html_content)

    print(f"Generating {fav['name']}...")
    try:
        png_name = f"{fav['name']}.png"
        # Render at 64x64 for quality, can be used as favicon
        hti.screenshot(html_file=temp_html, save_as=png_name, size=(64, 64))
        print(f"Successfully exported {png_name}")
    except Exception as e:
        print(f"Error: {e}")

    if os.path.exists(temp_html):
        os.remove(temp_html)

# Also generate a .ico file for the dark one (standard for websites)
try:
    dark_png_path = os.path.join(final_dir, 'favicon_dark.png')
    ico_path = os.path.join(final_dir, 'favicon.ico')
    img = Image.open(dark_png_path)
    img.save(ico_path, format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    print(f"Successfully generated {ico_path}")
except Exception as e:
    print(f"Error generating .ico: {e}")
