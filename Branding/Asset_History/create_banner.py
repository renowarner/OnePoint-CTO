from PIL import Image
import os

source_path = r"C:\Users\Devlin\Desktop\Gemini\OnePoint CTO\Website\Branding\Asset_History\Exports\PC_Background_Grid_4K.png"
output_dir = r"C:\Users\Devlin\Desktop\Gemini\OnePoint CTO\Website\Branding\Asset_History\Exports"
output_filename = "PC_Background_Grid_Banner.jpg"
output_path = os.path.join(output_dir, output_filename)

try:
    with Image.open(source_path) as img:
        # Convert to RGB for JPG
        img = img.convert("RGB")
        
        width, height = img.size
        print(f"Original size: {width}x{height}")
        
        # Target banner height (e.g., 1000px for a substantial banner from 4K)
        target_height = 1000 
        
        # Calculate crop box (center vertical)
        left = 0
        top = (height - target_height) // 2
        right = width
        bottom = top + target_height
        
        # Crop
        banner = img.crop((left, top, right, bottom))
        print(f"Cropped to: {width}x{target_height}")
        
        # Save
        banner.save(output_path, "JPEG", quality=95)
        print(f"Saved banner to: {output_path}")

except Exception as e:
    print(f"Error: {e}")
