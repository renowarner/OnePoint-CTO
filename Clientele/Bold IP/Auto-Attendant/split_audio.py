import os
import sys
from pydub import AudioSegment
from pydub.silence import split_on_silence

# Determine script directory
script_dir = os.path.dirname(os.path.abspath(__file__))

# FFmpeg paths
ffmpeg_dir = r"C:\Users\Devlin\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.0.1-full_build\bin"
ffmpeg_exe = os.path.join(ffmpeg_dir, "ffmpeg.exe")
ffprobe_exe = os.path.join(ffmpeg_dir, "ffprobe.exe")

# Configure pydub
AudioSegment.converter = ffmpeg_exe
AudioSegment.ffprobe = ffprobe_exe
# Also add to PATH just in case
os.environ["PATH"] += os.pathsep + ffmpeg_dir

# Paths
input_file = os.path.join(script_dir, "Google Voice Recordings.mp3")
output_dir = os.path.join(script_dir, "Split Recordings")

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

print(f"Loading {input_file}...")
try:
    sound = AudioSegment.from_mp3(input_file)
except Exception as e:
    print(f"Error loading file: {e}")
    sys.exit(1)

print(f"Audio length: {len(sound) / 1000.0:.2f} seconds")
print("Splitting audio (this may take a moment)...")

# Split on silence
# min_silence_len: minimum length of silence required for a split (in ms)
# silence_thresh: upper bound for how quiet is silent (in dBFS). We use -40dBFS.
chunks = split_on_silence(
    sound,
    min_silence_len=1000,
    silence_thresh=-40,
    keep_silence=500  # keep 500ms of silence at the ends so it doesn't sound cut off
)

print(f"Found {len(chunks)} chunks.")

for i, chunk in enumerate(chunks):
    out_file = os.path.join(output_dir, f"recording_{i+1:03d}.mp3")
    print(f"Exporting {out_file}...")
    chunk.export(out_file, format="mp3")

print("Done.")
