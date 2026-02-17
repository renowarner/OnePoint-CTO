import os
from html2image import Html2Image
from PIL import Image

# Setup paths
base_dir = r'C:\Users\Devlin\Desktop\Gemini\Projects\OnePoint CTO\Branding'
assets_dir = os.path.join(base_dir, 'Final_Assets')
output_dir = os.path.join(assets_dir, 'Exports')
svg_path = os.path.join(assets_dir, 'Logo_Main_Dark.svg')

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Read SVG content
with open(svg_path, 'r') as f:
    svg_content = f.read()

# Modify SVG to be responsive or larger
# We'll remove the specific width/height and let CSS control it
# And ensure the background rect is transparent or matches
svg_content = svg_content.replace('width="400"', 'width="100%"').replace('height="400"', 'height="100%"')

# Create HTML
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
            width: 1200px;
            height: 628px;
            overflow: hidden;
        }}
        .logo-container {{
            width: 600px; /* Scale logo to 50% of width */
            height: 600px;
        }}
    </style>
</head>
<body>
    <div class="logo-container">
        {svg_content}
    </div>
</body>
</html>
"""

# Save temporary HTML file
html_path = os.path.join(base_dir, 'temp_ad.html')
with open(html_path, 'w') as f:
    f.write(html_content)

# Render
hti = Html2Image(output_path=output_dir)
print("Rendering Google Ad Image (1200x628)...")

try:
    # Screenshot the specific element or just the body
    # output_file is relative to output_path
    hti.screenshot(
        html_file=html_path, 
        save_as='Google_Ad_Image.png', 
        size=(1200, 628)
    )
    
    # Convert to JPG
    png_path = os.path.join(output_dir, 'Google_Ad_Image.png')
    jpg_path = os.path.join(output_dir, 'Google_Ad_Image.jpg')
    
    with Image.open(png_path) as img:
        rgb_img = img.convert('RGB')
        rgb_img.save(jpg_path, 'JPEG', quality=95)
        
    print(f"Successfully generated: {png_path} and {jpg_path}")
    
except Exception as e:
    print(f"Error: {e}")

# Clean up
if os.path.exists(html_path):
    os.remove(html_path)
