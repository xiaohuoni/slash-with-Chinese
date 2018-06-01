import { writeFileSync } from 'fs';
import { join } from 'path';
import slash from 'slash';
const dvaContainerPath = join(process.cwd(), 'path.js');
const content = slash(process.cwd());
writeFileSync(dvaContainerPath, JSON.stringify(content), 'utf-8');