from html2image import Html2Image
import os

base_dir = r'C:\Users\Devlin\Desktop\Gemini'
branding_dir = r'Active Projects\Business Planning\Branding\Final_Assets'
output_dir = os.path.join(base_dir, branding_dir, 'Exports')

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

hti = Html2Image(output_path=output_dir)

targets = [
    ('Phone_Background_Grid.svg', 'Phone_Background_Grid.png', (1080, 1920)),
    ('Phone_Background_Grid_Zoom.svg', 'Phone_Background_Grid_Zoom.png', (1080, 1920)),
    ('PC_Background_Grid_4K.svg', 'PC_Background_Grid_4K.png', (3840, 2160))
]

for svg_name, png_name, size in targets:
    svg_path = os.path.join(base_dir, branding_dir, svg_name)
    print(f"Generating {size[0]}x{size[1]} background from {svg_name}...")
    hti.screenshot(url=svg_path, save_as=png_name, size=size)
    print(f"Done! Saved to {os.path.join(output_dir, png_name)}")