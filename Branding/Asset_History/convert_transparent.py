import os
from html2image import Html2Image

assets_dir = r'C:\Users\Devlin\Desktop\Gemini\Active Projects\Business Planning\Branding'
final_assets_dir = os.path.join(assets_dir, 'Final_Assets', 'Exports')

hti = Html2Image(output_path=final_assets_dir)

svg_path = os.path.join(assets_dir, 'Logo_Transparent_Source.svg')
output_name = "Logo_Main_Transparent.png"

print(f"Rendering transparent logo via browser...")
try:
    # We use a custom HTML wrapper to force the background to be transparent
    with open(svg_path, 'r') as f:
        svg_content = f.read()
    
    html_content = f"""
    <html>
    <body style="margin: 0; padding: 0; background: transparent;">
        {svg_content}
    </body>
    </html>
    """
    
    hti.screenshot(html_str=html_content, save_as=output_name, size=(1200, 1200))
    print(f"Successfully exported {output_name} to {final_assets_dir}")
except Exception as e:
    print(f"Error rendering transparent logo: {e}")
