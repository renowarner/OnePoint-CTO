from html2image import Html2Image
import os

svg_path = r'C:\Users\Devlin\Desktop\Gemini\Active Projects\Business Planning\Branding\Final_Assets\Logo_Profile_Light.svg'
output_dir = r'C:\Users\Devlin\Desktop\Gemini\Active Projects\Business Planning\Branding\Final_Assets\Exports'
output_file = 'LinkedIn_Logo_300x300.png'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

hti = Html2Image(output_path=output_dir)

print(f"Generating 300x300 logo from {svg_path}...")
hti.screenshot(url=svg_path, save_as=output_file, size=(300, 300))
print(f"Done! Saved to {os.path.join(output_dir, output_file)}")
