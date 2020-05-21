import * as vscode from 'vscode';
import { CodeReader, Fragment } from './reader';

export async function activate(context: vscode.ExtensionContext) {
	const codeReader = new CodeReader();
	
	await codeReader.init();

	let jsFragmentProvider = vscode.languages.registerCompletionItemProvider(['javascript', 'html'], {
		provideCompletionItems() {
			const fragments = Array.from(codeReader.codeMap.keys());

			return fragments.map(fragmentName => {
				const completion = new vscode.CompletionItem(fragmentName, 2);
				const fragmentMap = codeReader.codeMap.get(fragmentName) as Fragment;

				completion.insertText = fragmentMap.code;
				completion.documentation = new vscode.MarkdownString(fragmentMap.doc);

				return completion;
			});
		}
	});

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "teriri-vscode" is now active!');

	context.subscriptions.push(jsFragmentProvider);
}

export function deactivate() { }
