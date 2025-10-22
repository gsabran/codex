// CommonJS test file
try {
  const { Codex, Thread } = require('./dist/index.cjs');

  // Verify imports are defined
  if (typeof Codex !== 'function') {
    throw new Error('Codex is not a function');
  }
  if (typeof Thread !== 'function') {
    throw new Error('Thread is not a function');
  }
  console.log('✓ CommonJS require successful');

  // Test instantiation works
  const codex = new Codex({ apiKey: 'test' });
  if (!codex) {
    throw new Error('Failed to create Codex instance');
  }
  console.log('✓ Codex instance created');

  console.log('\n✅ CommonJS module test passed');
  process.exit(0);
} catch (error) {
  console.error('❌ CommonJS module test failed:');
  console.error(error.message);
  if (error.stack) {
    console.error(error.stack);
  }
  process.exit(1);
}
