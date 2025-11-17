// Client-side WASM combiner - runs in the browser
// This script fetches the three WASM parts and combines them

async function combineWasmParts() {
  console.log('Fetching WASM parts...');
  
  const buildUrl = "Build";
  const baseName = "8dfc1e55075f4fd7aeb48f420f6e1db6.wasm.br";
  
  try {
    // Fetch all three parts in parallel
    const [part1, part2, part3] = await Promise.all([
      fetch(`${buildUrl}/${baseName}.part1`).then(r => r.arrayBuffer()),
      fetch(`${buildUrl}/${baseName}.part2`).then(r => r.arrayBuffer()),
      fetch(`${buildUrl}/${baseName}.part3`).then(r => r.arrayBuffer())
    ]);
    
    console.log('Parts fetched, combining...');
    
    // Combine the parts
    const combined = new Blob([part1, part2, part3], { type: 'application/wasm' });
    
    // Create a URL for the combined blob
    const combinedUrl = URL.createObjectURL(combined);
    
    console.log('✓ WASM parts combined successfully');
    console.log(`Combined size: ${(combined.size / (1024 * 1024)).toFixed(1)}MB`);
    
    return combinedUrl;
    
  } catch (error) {
    console.error('Error combining WASM parts:', error);
    throw error;
  }
}

// Make it available globally
window.combineWasmParts = combineWasmParts;
