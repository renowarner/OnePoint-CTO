import os
from html2image import Html2Image
from PIL import Image

assets_dir = r'C:\Users\Devlin\Desktop\Gemini\Active Projects\Business Planning\Branding'
final_assets_dir = os.path.join(assets_dir, 'Final_Assets', 'Exports')

hti = Html2Image(output_path=final_assets_dir)

svg_path = os.path.join(assets_dir, 'Logo_Transparent_Source.svg')
output_name = "Logo_Main_Transparent_Tight.png"

try:
    with open(svg_path, 'r') as f:
        svg_content = f.read()
    
    # We use a larger viewport to ensure nothing is clipped before the crop
    html_content = f"""
    <html>
    <body style="margin: 0; padding: 0; background: transparent;">
        <div style="width: 500px; height: 500px; background: transparent;">
            {svg_content}
        </div>
    </body>
    </html>
    """
    
    # Take a 500x500 screenshot to capture all nodes and text
    hti.screenshot(html_str=html_content, save_as=output_name, size=(500, 500))
    
    # Now autocrop with Pillow
    png_path = os.path.join(final_assets_dir, output_name)
    with Image.open(png_path) as img:
        # getbbox finds the bounding box of non-zero (non-transparent) pixels
        bbox = img.getbbox()
        if bbox:
            # Add a small 5px padding so it's not "too" tight
            padding = 10
            new_bbox = (
                max(0, bbox[0] - padding),
                max(0, bbox[1] - padding),
                min(img.width, bbox[2] + padding),
                min(img.height, bbox[3] + padding)
            )
            cropped = img.crop(new_bbox)
            cropped.save(png_path)
            
    print(f"Successfully exported fixed tight-cropped {output_name}")
except Exception as e:
    print(f"Error rendering tight logo: {e}")