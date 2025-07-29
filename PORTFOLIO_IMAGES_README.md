# Portfolio Images Setup Guide

## How to Add Portfolio Session Images

This guide explains how to add images to your portfolio sessions.

### 1. Image File Structure

Place your images in the following directory:
```
public/images/
```

**Important:** Images should be placed in the `public/images/` folder, not in `src/assets/images/`. This ensures they are properly served by the development server.

### 2. Image Naming Convention

Use the following naming convention for your images:

- **Main session image**: `session1.jpg`, `session2.jpg`, etc.
- **Additional gallery images**: `session1-1.jpg`, `session1-2.jpg`, `session1-3.jpg`, etc.

### 3. Image Paths in Data

The image paths are configured in `src/data/portfolioData.ts` and `src/data/membersData.ts`:

```typescript
{
  id: 1,
  title: "Cybersecurity Awareness at Delhi Public School",
  imagePath: "/images/session1.jpg",
  // ... other data
  fullDetails: {
    // ... other details
    images: [
      "/images/session1-1.jpg",
      "/images/session1-2.jpg",
      "/images/session1-3.jpg"
    ]
  }
}
```

**Important Note:** The application now includes a smart image loading system that will show placeholder icons if images are not found, making it easier to test and develop without having all images ready.

### 4. Adding Your Images

1. **Prepare your images** in JPG, PNG, or WebP format
2. **Resize images** to appropriate dimensions:
   - Main session images: 800x600px or similar aspect ratio
   - Gallery images: 400x300px or similar aspect ratio
   - Member profile images: 400x400px (square aspect ratio)
3. **Place images** in `public/images/` directory
4. **Update image paths** in `src/data/portfolioData.ts` and `src/data/membersData.ts` if needed

### 5. Image Optimization Tips

- Use compressed images (JPG for photos, PNG for graphics)
- Keep file sizes under 500KB for main images, 200KB for gallery images
- Use descriptive filenames
- Consider using WebP format for better compression

### 6. Current Session Images Needed

Based on the portfolio data, you need these images:

#### Session 1: Delhi Public School
- `session1.jpg` (main image)
- `session1-1.jpg`, `session1-2.jpg`, `session1-3.jpg` (gallery)

#### Session 2: RWA Meeting
- `session2.jpg` (main image)
- `session2-1.jpg`, `session2-2.jpg` (gallery)

#### Session 3: Corporate Training
- `session3.jpg` (main image)
- `session3-1.jpg`, `session3-2.jpg`, `session3-3.jpg` (gallery)

#### Session 4: College Program
- `session4.jpg` (main image)
- `session4-1.jpg`, `session4-2.jpg` (gallery)

#### Session 5: Public Campaign
- `session5.jpg` (main image)
- `session5-1.jpg`, `session5-2.jpg`, `session5-3.jpg` (gallery)

#### Session 6: Senior Citizens Workshop
- `session6.jpg` (main image)
- `session6-1.jpg`, `session6-2.jpg` (gallery)

### 7. Team Member Images Needed

Based on the team data, you need these member profile images:

#### Team Members
- `kartik-bhattacharya.jpg` (Kartik Bhattacharya - Speaker)
- `member2.jpg` (Priya Patel - Senior Cybersecurity Analyst)
- `member3.jpg` (Amit Kumar - Digital Forensics Specialist)
- `member4.jpg` (Neha Singh - Community Outreach Coordinator)
- `member5.jpg` (Vikram Malhotra - Technical Training Lead)
- `member6.jpg` (Anjali Desai - Research & Development Lead)

**Image Requirements for Team Members:**
- Square aspect ratio (1:1)
- Professional headshots
- Recommended size: 400x400px
- File format: JPG or PNG
- File size: Under 200KB per image

### 8. Testing Your Images

After adding images:
1. Run `npm run dev` to start the development server
2. Navigate to the Portfolio section to test session images
3. Navigate to the Team section to test member profile images
4. Click on any session or member card to view the detailed page
5. Verify that images display correctly

### 9. Troubleshooting

If images don't display:
1. Check that file paths in `portfolioData.ts` and `membersData.ts` match your actual file names
2. Ensure images are in the correct directory (`public/images/`)
3. Verify file permissions
4. Check browser console for any errors
5. Make sure image filenames don't contain spaces (use hyphens instead)

### 10. Image Placeholders

Until you add real images, the application will show placeholder icons. The placeholders will be replaced with actual images once you add them to the `src/assets/images/` directory.

### 11. Updating Data

To add new sessions or modify existing ones:
1. Edit `src/data/portfolioData.ts`
2. Add new session objects following the existing structure
3. Update image paths to match your actual image files
4. The portfolio will automatically update with your changes

To add new team members or modify existing ones:
1. Edit `src/data/membersData.ts`
2. Add new member objects following the existing structure
3. Update image paths to match your actual image files
4. The team section will automatically update with your changes 