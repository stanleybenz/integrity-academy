#!/usr/bin/env python3
import zipfile
import os
from pathlib import Path

# Get current directory
base_dir = Path(__file__).parent
zip_file = base_dir / 'integrity-academy-website.zip'

# Remove existing zip if any
if zip_file.exists():
    zip_file.unlink()
    print("Removed existing zip file")

# Create zip file
with zipfile.ZipFile(zip_file, 'w', zipfile.ZIP_DEFLATED) as zf:
    # Add HTML files
    html_files = [
        'index.html', 'about.html', 'contact.html', 'staff.html',
        'admissions.html', 'gallery.html', 'academics-nursery.html',
        'academics-primary.html', 'academics-secondary.html',
        'academics-extracurricular.html', '404.html'
    ]
    
    print("Adding HTML files...")
    for html_file in html_files:
        file_path = base_dir / html_file
        if file_path.exists():
            zf.write(file_path, html_file)
            print(f"  ✓ {html_file}")
        else:
            print(f"  ✗ {html_file} (not found)")
    
    # Add .htaccess
    htaccess = base_dir / '.htaccess'
    if htaccess.exists():
        zf.write(htaccess, '.htaccess')
        print("  ✓ .htaccess")
    else:
        print("  ✗ .htaccess (not found)")
    
    # Add assets directory
    assets_dir = base_dir / 'assets'
    if assets_dir.exists():
        print("\nAdding assets directory...")
        file_count = 0
        for root, dirs, files in os.walk(assets_dir):
            for file in files:
                file_path = Path(root) / file
                # Skip system files
                if file.startswith('.') or file == '.DS_Store':
                    continue
                arcname = file_path.relative_to(base_dir)
                zf.write(file_path, str(arcname))
                file_count += 1
        print(f"  ✓ Added {file_count} files from assets/")
    else:
        print("\n  ✗ assets/ directory (not found)")

if zip_file.exists():
    size_mb = zip_file.stat().st_size / 1024 / 1024
    print(f"\n✅ Package created successfully!")
    print(f"📦 File: integrity-academy-website.zip")
    print(f"📊 Size: {size_mb:.2f} MB")
    print(f"📍 Location: {zip_file.absolute()}")
else:
    print("\n❌ Failed to create zip file")

