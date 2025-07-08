// Migration script to run from command line
// Usage: node scripts/migrate.js

// Load environment variables
require('dotenv').config({ path: '.env.local' });

// Import ES modules
async function runMigration() {
  try {
    console.log('🚀 Starting blog data migration...\n');
    
    // Dynamic import for ES modules
    const { migrateBlogData } = await import('../lib/migrate-blog-data.js');
    
    const results = await migrateBlogData();
    
    console.log('\n✅ Migration completed successfully!');
    console.log(`📊 Total posts: ${results.length}`);
    console.log(`✅ Successful: ${results.filter(r => r.success).length}`);
    console.log(`❌ Failed: ${results.filter(r => !r.success).length}`);
    
    // Show failed migrations
    const failures = results.filter(r => !r.success);
    if (failures.length > 0) {
      console.log('\n❌ Failed migrations:');
      failures.forEach(failure => {
        console.log(`  - ${failure.key}`);
      });
    }
    
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  }
}

runMigration(); 