import os
from html2image import Html2Image
from PIL import Image

assets_dir = r'C:\Users\Devlin\Desktop\Gemini\Active Projects\Business Planning\Branding\Final_Assets'
output_dir = os.path.join(assets_dir, 'Exports')

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

hti = Html2Image(output_path=output_dir)

files = [f for f in os.listdir(assets_dir) if f.endswith('.svg')]

for file in files:
    name = os.path.splitext(file)[0]
    svg_path = os.path.join(assets_dir, file)
    png_name = f"{name}.png"
    jpg_name = f"{name}.jpg"
    
    # Define size
    size = (1584, 396) if "Banner" in file else (1200, 1200)
    
    print(f"Rendering {file} via browser...")
    try:
        # html2image can take a local file path
        hti.screenshot(url=svg_path, save_as=png_name, size=size)
        
        # Convert the resulting PNG to JPG
        png_path = os.path.join(output_dir, png_name)
        jpg_path = os.path.join(output_dir, jpg_name)
        
        with Image.open(png_path) as img:
            rgb_img = img.convert('RGB')
            rgb_img.save(jpg_path, 'JPEG', quality=95)
            
        print(f"Successfully exported {png_name} and {jpg_name}")
    except Exception as e:
        print(f"Error rendering {file}: {e}")
