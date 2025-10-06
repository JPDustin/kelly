# Monadnock Realty - Historic New England Properties

A stunning single-page real estate website featuring parallax scrolling effects, image galleries, and responsive design, specifically tailored for New England properties in the Monadnock region of New Hampshire.

## Features

- **Parallax Scrolling**: Smooth parallax effects that enhance the storytelling experience as users scroll through property details
- **Interactive Image Gallery**: Click any property image to open a full-screen gallery with navigation and thumbnail preview
- **Responsive Design**: Optimized for all devices from mobile phones to desktop computers
- **New England Aesthetic**: Color scheme and typography inspired by the historic charm of the region
- **Rich Content**: Each property includes detailed history, backstory, and unique characteristics
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling to different sections
- **Performance Optimized**: Lazy loading, throttled scroll events, and optimized animations

## Project Structure

```
monadnock-realty/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── script.js       # Interactive functionality and parallax effects
└── images/             # Property images and assets
```

## Technologies Used

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Modern CSS with Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No dependencies, pure JavaScript for all interactions
- **Google Fonts**: Crimson Text and Montserrat for New England typography
- **CSS Animations**: Smooth transitions and hover effects
- **Intersection Observer API**: For scroll animations and lazy loading

## Key Sections

1. **Hero Section**: Full-screen parallax introduction with call-to-action
2. **Featured Property**: Detailed showcase of the Whitmore Estate with rich history
3. **Heritage Section**: Background on the Monadnock region with parallax background
4. **Additional Listings**: Grid of other historic properties
5. **Contact Section**: Contact information with New England styling

## Sample Properties

### The Whitmore Estate - Peterborough, NH

- **Price**: $1,250,000
- **Built**: 1847
- **Features**: 5 bed, 4 bath, 4,200 sq ft
- **History**: Greek Revival mansion built by textile magnate, served as Underground Railroad station

### Victorian Farmhouse - Dublin, NH

- **Price**: $485,000
- **Built**: 1889
- **Features**: 3 bed, 2 bath, 2,100 sq ft
- **History**: Originally the town doctor's residence with converted carriage house

### Cape Cod Colonial - Hancock, NH

- **Price**: $625,000
- **Built**: 1798
- **Features**: 4 bed, 3 bath, 2,800 sq ft
- **History**: Revolutionary War veteran's home with original beehive oven

### Historic Mill House - Jaffrey, NH

- **Price**: $750,000
- **Built**: 1825
- **Features**: 4 bed, 4 bath, 3,500 sq ft
- **History**: Federal-style mill owner's residence overlooking historic mill pond

## Gallery System

The website includes a sophisticated gallery system with:

- Multiple image collections per property
- Keyboard navigation (arrow keys, escape)
- Touch/swipe support for mobile devices
- Thumbnail navigation
- Smooth transitions and loading states

## Responsive Breakpoints

- **Desktop**: 1200px and up
- **Tablet**: 768px to 1199px
- **Mobile**: 320px to 767px

## Performance Features

- **Lazy Loading**: Images load as they come into view
- **Throttled Scroll Events**: Optimized for 60fps parallax performance
- **Critical Image Preloading**: Key images load immediately
- **Optimized Animations**: Hardware-accelerated transforms
- **Efficient DOM Queries**: Cached selectors and minimal reflows

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Setup and Installation

1. Download or clone the project files
2. Place all files in a web server directory
3. Replace placeholder images in the `/images` folder with actual property photos
4. Customize property information in `index.html`
5. Adjust styling in `styles.css` as needed
6. Open `index.html` in a web browser

## Image Requirements

For best results, use high-quality images with the following specifications:

- **Hero Background**: 1920x1080px or larger
- **Featured Property Main**: 800x600px minimum
- **Property Listings**: 600x400px minimum
- **Gallery Images**: 1200x800px minimum for optimal quality

## Customization

### Colors

The color scheme can be adjusted by modifying the CSS custom properties:

- Primary: `#8b5a3c` (New England Brown)
- Secondary: `#b68f71` (Warm Tan)
- Text: `#2c3e50` (Dark Blue-Gray)
- Background: `#fafafa` (Off-White)

### Typography

- Headers: Montserrat (Google Fonts)
- Body: Crimson Text (Google Fonts)

### Content

All property information, descriptions, and historical details can be customized in the HTML file.

## Future Enhancements

- Integration with real estate APIs
- Contact form functionality
- Virtual tour embedding
- Interactive map integration
- Search and filtering capabilities
- SEO optimization
- Content management system integration

## License

This project is open source and available under the MIT License.

## Contact

For questions or customization requests, please contact:

- Email: info@monadnockrealty.com
- Phone: (603) 924-REAL
- Address: 123 Main Street, Peterborough, NH 03458
