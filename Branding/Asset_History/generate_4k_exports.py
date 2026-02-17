import os
from html2image import Html2Image
from PIL import Image
import re

# Setup paths
base_dir = r'C:\Users\Devlin\Desktop\Gemini\Projects\OnePoint CTO\Branding'
assets_dir = os.path.join(base_dir, 'Final_Assets')
output_dir = os.path.join(assets_dir, 'Exports', '4K_JPEGs') # Keeping it in the same output dir for now
transparent_dir = os.path.join(assets_dir, 'Exports', 'Transparent_PNGs')

if not os.path.exists(transparent_dir):
    os.makedirs(transparent_dir)

hti = Html2Image(output_path=output_dir)

targets = [
    # JPEGs
    {"file": "Logo_Main_Dark.svg", "name": "OnePoint_Main_Dark_4K", "size": (4096, 4096)},
    {"file": "Logo_Main_Light.svg", "name": "OnePoint_Main_Light_4K", "size": (4096, 4096)},
    {"file": "Logo_Profile_Dark.svg", "name": "OnePoint_Icon_Dark_4K", "size": (4096, 4096)},
    {"file": "Logo_Profile_Light.svg", "name": "OnePoint_Icon_Light_4K", "size": (4096, 4096)},
    {"file": "LinkedIn_Banner_V3.svg", "name": "OnePoint_Banner_Dark_4K", "size": (3840, 2160), "is_banner": True},
    {"file": "LinkedIn_Banner_Light.svg", "name": "OnePoint_Banner_Light_4K", "size": (3840, 2160), "is_banner": True},
    {"file": "LinkedIn_Banner_V3.svg", "name": "OnePoint_Banner_Dark_NoLogo_4K", "size": (3840, 2160), "is_banner": True, "no_logo": True},
    {"file": "LinkedIn_Banner_Light.svg", "name": "OnePoint_Banner_Light_NoLogo_4K", "size": (3840, 2160), "is_banner": True, "no_logo": True},
    
    # Transparent PNGs
    {"file": "Logo_Main_Dark.svg", "name": "OnePoint_Main_Transparent_4K", "size": (4096, 4096), "is_transparent": True},
    {"file": "Logo_Profile_Dark.svg", "name": "OnePoint_Icon_Transparent_4K", "size": (4096, 4096), "is_transparent": True},
    {"file": "LinkedIn_Banner_V3.svg", "name": "OnePoint_Banner_Transparent_4K", "size": (3840, 2160), "is_banner": True, "is_transparent": True},
    {"file": "LinkedIn_Banner_V3.svg", "name": "OnePoint_Banner_NoLogo_Transparent_4K", "size": (3840, 2160), "is_banner": True, "no_logo": True, "is_transparent": True}
]

def clean_and_scale_svg(content, is_banner, no_logo=False, is_transparent=False):
    # Strip ALL internal patterns and grid rects
    content = re.sub(r'<pattern.*?</pattern>', '', content, flags=re.DOTALL)
    content = re.sub(r'<rect width="100%" height="100%" fill="url\(#grid\)"\s?/>', '', content)
    content = re.sub(r'<rect width="100%" height="100%" fill="url\(#grid_4k\)"\s?/>', '', content)
    
    # Strip the background rects
    content = re.sub(r'<rect width="100%" height="100%" fill="#0A192F"\s?/>', '', content)
    content = re.sub(r'<rect width="100%" height="100%" fill="#F8FAFC"\s?/>', '', content)
    content = re.sub(r'<rect width="100%" height="100%" fill="#FFFFFF"\s?/>', '', content)

    # If no_logo is True, remove the background graphic group <g>
    if no_logo:
        content = re.sub(r'<!-- Background Graphic -->.*?<g transform="translate\(1100, 20\) scale\(1.1\)" opacity="1.0">.*?</g>', '', content, flags=re.DOTALL)
        content = re.sub(r'<!-- Background Graphic \(Moved right and up slightly for better framing\) -->.*?<g transform="translate\(1100, 20\) scale\(1.1\)" opacity="1.0">.*?</g>', '', content, flags=re.DOTALL)

    # Force viewBox
    if 'viewBox' not in content:
        if not is_banner:
            content = content.replace('<svg', '<svg viewBox="0 0 400 400"')
        else:
            content = content.replace('<svg', '<svg viewBox="0 0 1584 396"')
            
    # Remove hardcoded width/height
    content = re.sub(r'\s(width|height)="\d+"', '', content)
    
    return content

for target in targets:
    svg_path = os.path.join(assets_dir, target["file"])
    with open(svg_path, 'r') as f:
        svg_content = f.read()

    is_transparent = target.get("is_transparent", False)
    is_dark = ("Dark" in target["name"] or "V3" in target["file"]) and not is_transparent
    svg_content = clean_and_scale_svg(svg_content, target.get("is_banner", False), target.get("no_logo", False), is_transparent)

    bg_color = "transparent" if is_transparent else ("#0A192F" if is_dark else "#F8FAFC")
    
    # CSS Grid logic
    grid_css = ""
    if is_dark and not is_transparent:
        grid_css = f"""
            background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
            background-size: 100px 100px;
        """
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{
                margin: 0;
                padding: 0;
                background-color: {bg_color};
                {grid_css}
                display: flex;
                justify-content: center;
                align-items: center;
                width: {target['size'][0]}px;
                height: {target['size'][1]}px;
                overflow: hidden;
            }}
            .container {{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }}
            svg {{
                width: 85%; 
                height: 85%;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            {svg_content}
        </div>
    </body>
    </html>
    """
    
    temp_html = os.path.join(base_dir, f"temp_render_{target['name']}.html")
    with open(temp_html, 'w') as f:
        f.write(html_content)

    print(f"Generating 4K {target['name']}...")
    try:
        png_name = f"{target['name']}.png"
        hti.screenshot(html_file=temp_html, save_as=png_name, size=target['size'])
        
        current_png_path = os.path.join(output_dir, png_name)
        
        if is_transparent:
            # Move to transparent folder
            final_png_path = os.path.join(transparent_dir, png_name)
            if os.path.exists(final_png_path):
                os.remove(final_png_path)
            os.rename(current_png_path, final_png_path)
            print(f"Successfully exported Transparent PNG: {final_png_path}")
        else:
            # Convert to High Quality JPEG
            jpg_path = os.path.join(output_dir, f"{target['name']}.jpg")
            with Image.open(current_png_path) as img:
                rgb_img = img.convert('RGB')
                rgb_img.save(jpg_path, 'JPEG', quality=95, subsampling=0)
            os.remove(current_png_path)
            print(f"Successfully exported JPEG: {jpg_path}")
            
    except Exception as e:
        print(f"Error: {e}")

    if os.path.exists(temp_html):
        os.remove(temp_html)
