// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { CodeReader } from './reader'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	const codeReader = new CodeReader()

	await codeReader.init()

	let fragmentProvider = vscode.languages.registerCompletionItemProvider('plaintext', {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			const fragments = Array.from(codeReader.codeMap.keys())

			return fragments.map(fragmentName => {
				const completion = new vscode.CompletionItem(fragmentName)
				const fragmentMap = codeReader.codeMap.get(fragmentName)

				completion.insertText = new vscode.SnippetString(fragmentMap?.code)
				completion.documentation = new vscode.MarkdownString(fragmentMap?.doc)

				return completion
			})
		}
	})

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "teriri-vscode" is now active!');

	context.subscriptions.push(fragmentProvider);
}

// this method is called when your extension is deactivated
export function deactivate() { }
