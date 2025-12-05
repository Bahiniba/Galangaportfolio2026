import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Mapping direct des assets (copié de utils/assetHelper.ts)
const assetMapping: Record<string, string> = {
  // Profile images
  '71ed4c233544e578bf3f90b15239db5dacba5077.png': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ramses&backgroundColor=bffffd',
  'd8e74e8a9c52314b7998662285e91c803e62026a.png': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ramses&backgroundColor=bffffd',
  '75e5c5a87db3982220f0406948993fec4781a44d.png': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ramses&backgroundColor=bffffd',
  
  // Project screenshots
  'e33195a80fd6bd33ab4ae3f418d65e36d5cb474d.png': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
  'afb24e8572c9450898ecde0cfdc542d61bf80fe7.png': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
  '70291f70eb21813fe3c3418cfc95f5981fc7002b.png': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80',
  '0b8d98fdd1221dd9ac93eae462b01d5c450b25bd.png': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop&q=80',
  '45a277f356ceeb146fd30e72fabc987f82daa051.png': 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop&q=80',
  '2770a18cdff21d8764dab408ca2e7a555c140c61.png': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&q=80',
  '1dbe275bee644aace1d22428b3092bf6e74f77a2.png': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=800&fit=crop&q=80',
  'f37646889dcdd3f524bac5e8614eda07a0f86c3f.png': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop&q=80',
  'c746ff0897b5f608b46aa66d2862f0e89ef16046.png': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
  'c2318931eb407caf67cded54bb71972c78f5b76f.png': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
  'e6bdf6b5a2ad6225766452cc0fe97f4ad9b3d701.png': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80',
  '7172e040f6077a55145fdb81ad34063356ee9deb.png': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop&q=80',
  '1c5902789edc745397bdcb49a2bf759a4bc0124f.png': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&q=80',
  
  // Avatars
  '5e1703e6ea203cc7ab1f22352424c36fae8df2ed.png': 'https://api.dicebear.com/7.x/avataaars/svg?seed=User1&backgroundColor=e3f2fd',
  '23ac6e3eec3898ef9e58f2d92a7ed196a8c8343e.png': 'https://api.dicebear.com/7.x/avataaars/svg?seed=User2&backgroundColor=fff0f0',
  '70d3c922397689cde8b40bd3ced656f2626f1128.png': 'https://api.dicebear.com/7.x/avataaars/svg?seed=User3&backgroundColor=f1f8e9',
  
  // Tech logos
  '989aa47122f2888ba48cf8b54d890115fa5485a2.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  '3ae1f504213859f3d64d82460466b8a67c61c6f1.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'de4e6a69468ad20c82cd41a022a6b17caf4946f8.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  '0167e29ae960dc2fe4676938fd6655d9af114a1d.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  '69b784fd22bca4ee6a7a61771af4126afea89757.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'a513f271cee07b3106c6462a8e0adf17b2cb7184.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  '65658365932f5742675f3680cf912dfaa4176b0e.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'b601a1b673bd1f6d563f420c50c05632ea042cd7.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'b347dcdd51a47279e608fce75f980687934a6248.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  '37fd3115db9f64990af9610232c831f9ffa6fd54.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'f3018b26b7e8d58d254f7494d360a2340fed8789.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  '07af9e6e62b716259b86b8615960bdc3375d7737.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  'f0a51d0feec921f333bb41ceb7ad7580f1ef0981.png': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  '23372b0031b8a8f4ad7cbfb075608e627214bc98.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
};

function resolveAsset(assetImport: string): string {
  // Si c'est un import figma:asset, extraire le hash
  if (assetImport.includes('figma:asset/')) {
    const hash = assetImport.split('figma:asset/')[1];
    return assetMapping[hash] || assetImport;
  }
  return assetImport;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'figma-asset-resolver',
      enforce: 'pre',
      resolveId(id) {
        // Intercepter les imports figma:asset
        if (id.startsWith('figma:asset/')) {
          // Retourner un ID virtuel
          return '\0' + id;
        }
      },
      load(id) {
        // Charger les modules virtuels figma:asset
        if (id.startsWith('\0figma:asset/')) {
          const assetId = id.slice(1); // Retirer le \0
          const resolvedUrl = resolveAsset(assetId);
          
          // Retourner l'URL comme export default
          return `export default "${resolvedUrl}";`;
        }
      }
    }
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['motion/react'],
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'motion/react']
  }
});