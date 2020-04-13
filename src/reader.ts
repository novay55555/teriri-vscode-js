import * as Emitter from 'events';
import * as fs from 'fs';
import * as config from './config';
import { join } from 'path';

class CodeReader extends Emitter {
  constructor(options: any = {}) {
    super();
    this._prefix = options.prefix || 'trr_';
    this.codeMap = new Map();
  }

  codeMap: Map<any, Fragment>;

  private _prefix: string;

  async init() {
    const dirs = await this._readDir();
    const results = await Promise.all(dirs.map(dir => this._collect(dir)));

    dirs.forEach((dir, index) => {
      this.codeMap.set(this._prefix + dir, results[index]);
    });
  }

  private _readDir(): Promise<string[]> {
    return new Promise(resolve => {
      fs.readdir(config.codePath, (err, data) => {
        if (err) {return resolve([]);}

        resolve(data);
      });
    });
  }

  private _readFile(path: string): Promise<string> {
    return new Promise(resolve => {
      fs.readFile(path, (err, data) => {
        if (err) {return resolve('');}

        resolve(data.toString('utf-8'));
      });
    });
  }

  private _collect(codeName: string): Promise<Fragment> {
    return Promise.all([
      this._readFile(join(config.codePath, `${codeName}/index.js`)),
      this._readFile(join(config.codePath, `${codeName}/README.md`))
    ]).then(([code, doc]) => {
      return Promise.resolve({ code, doc });
    });
  }
}

interface Fragment {
  code: string,
  doc: string
}

export {
  CodeReader
};