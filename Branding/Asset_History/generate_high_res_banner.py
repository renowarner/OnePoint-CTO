import os
from html2image import Html2Image
from PIL import Image

# Setup paths
base_dir = r'C:\Users\Devlin\Desktop\Gemini\Projects\OnePoint CTO\Branding'
assets_dir = os.path.join(base_dir, 'Final_Assets')
output_dir = os.path.join(assets_dir, 'Exports')
svg_path = os.path.join(assets_dir, 'LinkedIn_Banner_V3.svg')

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Read SVG content
with open(svg_path, 'r') as f:
    svg_content = f.read()

# Make SVG responsive within its container
svg_content = svg_content.replace('width="1584"', 'width="100%"').replace('height="396"', 'height="100%"')

# Create HTML for 4096x4096px square
html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{
            margin: 0;
            padding: 0;
            background-color: #0A192F;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 4096px;
            height: 4096px;
            overflow: hidden;
        }}
        .banner-container {{
            width: 100%;
            /* Maintain original aspect ratio: 1584 / 396 = 4 */
            /* 4096 / 4 = 1024px height */
            height: 1024px;
        }}
    </style>
</head>
<body>
    <div class="banner-container">
        {svg_content}
    </div>
</body>
</html>
"""

# Save temporary HTML file
html_path = os.path.join(base_dir, 'temp_high_res.html')
with open(html_path, 'w') as f:
    f.write(html_content)

# Render
hti = Html2Image(output_path=output_dir)
print("Rendering High-Res Banner (4096x4096)...")

try:
    hti.screenshot(
        html_file=html_path, 
        save_as='Banner_4K_Square.png', 
        size=(4096, 4096)
    )
    
    # Convert to JPG
    png_path = os.path.join(output_dir, 'Banner_4K_Square.png')
    jpg_path = os.path.join(output_dir, 'Banner_4K_Square.jpg')
    
    with Image.open(png_path) as img:
        rgb_img = img.convert('RGB')
        rgb_img.save(jpg_path, 'JPEG', quality=95)
        
    print(f"Successfully generated: {png_path} and {jpg_path}")
    
except Exception as e:
    print(f"Error: {e}")

# Clean up
if os.path.exists(html_path):
    os.remove(html_path)
