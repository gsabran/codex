// ESM test file
import { Codex, Thread } from './dist/index.js';

try {
  // Verify imports are defined
  if (typeof Codex !== 'function') {
    throw new Error('Codex is not a function');
  }
  if (typeof Thread !== 'function') {
    throw new Error('Thread is not a function');
  }
  console.log('✓ ESM imports successful');

  // Test instantiation works
  const codex = new Codex({ apiKey: 'test' });
  if (!codex) {
    throw new Error('Failed to create Codex instance');
  }
  console.log('✓ Codex instance created');

  console.log('\n✅ ESM module test passed');
  process.exit(0);
} catch (error) {
  console.error('❌ ESM module test failed:');
  console.error(error.message);
  if (error.stack) {
    console.error(error.stack);
  }
  process.exit(1);
}
