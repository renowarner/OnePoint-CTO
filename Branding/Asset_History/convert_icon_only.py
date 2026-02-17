import os
from html2image import Html2Image
from PIL import Image

assets_dir = r'C:\Users\Devlin\Desktop\Gemini\Active Projects\Business Planning\Branding'
final_assets_dir = os.path.join(assets_dir, 'Final_Assets', 'Exports')

hti = Html2Image(output_path=final_assets_dir)

svg_path = os.path.join(assets_dir, 'Logo_Icon_Only_Source.svg')
output_name = "Logo_Icon_Transparent_Tight.png"

try:
    with open(svg_path, 'r') as f:
        svg_content = f.read()
    
    html_content = f"""
    <html>
    <body style="margin: 0; padding: 0; background: transparent;">
        <div style="width: 500px; height: 500px; background: transparent;">
            {svg_content}
        </div>
    </body>
    </html>
    """
    
    hti.screenshot(html_str=html_content, save_as=output_name, size=(500, 500))
    
    png_path = os.path.join(final_assets_dir, output_name)
    with Image.open(png_path) as img:
        bbox = img.getbbox()
        if bbox:
            padding = 10
            new_bbox = (
                max(0, bbox[0] - padding),
                max(0, bbox[1] - padding),
                min(img.width, bbox[2] + padding),
                min(img.height, bbox[3] + padding)
            )
            cropped = img.crop(new_bbox)
            cropped.save(png_path)
            
    print(f"Successfully exported icon-only tight-cropped {output_name}")
except Exception as e:
    print(f"Error rendering icon logo: {e}")
