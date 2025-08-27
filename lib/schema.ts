import { Metadata } from 'next'

// Schema.org JSON-LD for Local Business
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicSchool',
  name: 'Guitar Bùi Ngọc Sơn',
  description: 'Lớp học đàn guitar cùng thầy Bùi Ngọc Sơn tại Hà Nội, dạy từ cơ bản đến nâng cao cho mọi lứa tuổi.',
  url: 'https://nim-fawn.vercel.app/',
  telephone: '+84xxxxxxxxx', // Thay bằng số điện thoại thực
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Đường ABC', // Thay bằng địa chỉ thực
    addressLocality: 'Hà Nội',
    addressRegion: 'Hà Nội',
    postalCode: '100000',
    addressCountry: 'VN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '21.0278', // Thay bằng tọa độ thực
    longitude: '105.8342'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '21:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '10:00',
      closes: '18:00'
    }
  ],
  image: 'https://nim-fawn.vercel.app/new-og-image.png',
  priceRange: '$$', // $ đến $$$$ biểu thị mức giá
  // Thêm các khóa học như offers
  offers: [
    {
      '@type': 'Offer',
      name: 'Khóa học Guitar Cơ bản',
      description: 'Dành cho người mới bắt đầu, học cách cầm đàn, đọc tab và các hợp âm cơ bản.',
      price: '1500000',
      priceCurrency: 'VND',
      availability: 'https://schema.org/InStock',
      url: 'https://nim-fawn.vercel.app/khoa-hoc'
    },
    {
      '@type': 'Offer',
      name: 'Khóa học Guitar Nâng cao',
      description: 'Học kỹ thuật fingerstyle, solo, và biểu diễn chuyên nghiệp.',
      price: '2000000',
      priceCurrency: 'VND',
      availability: 'https://schema.org/InStock',
      url: 'https://nim-fawn.vercel.app/khoa-hoc'
    }
  ]
}

// Schema.org JSON-LD for Person (Instructor)
export const instructorSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bùi Ngọc Sơn',
  jobTitle: 'Giáo viên dạy Guitar',
  description: 'Thầy Bùi Ngọc Sơn có hơn 10 năm kinh nghiệm giảng dạy guitar, chuyên về fingerstyle và guitar cổ điển.',
  image: 'https://nim-fawn.vercel.app/teacher-image.jpg', // Thay bằng ảnh thực của thầy
  worksFor: {
    '@type': 'MusicSchool',
    name: 'Guitar Bùi Ngọc Sơn'
  },
  sameAs: [
    'https://facebook.com/buingocson', // Thay bằng URL thực
    'https://youtube.com/buingocson', // Thay bằng URL thực
  ]
}

// Thêm structured data vào metadata
export function addStructuredDataToMetadata(metadata: Metadata): Metadata {
  const updatedMetadata = { ...metadata };
  
  if (!updatedMetadata.other) {
    updatedMetadata.other = {};
  }
  
  // Đảm bảo other là một đối tượng hợp lệ
  const otherData = updatedMetadata.other as Record<string, string | string[]>;
  
  // Thêm structured data
  otherData['application/ld+json'] = [
    JSON.stringify(localBusinessSchema),
    JSON.stringify(instructorSchema)
  ];
  
  return updatedMetadata;
}
