import { FC } from 'react';
import ValidateCodeEditor from './components/validate-code-editor';
import { CodeEditorType } from './interface';
declare const CodeEditor: FC<CodeEditorType> & {
    ValidateCodeEditor: typeof ValidateCodeEditor;
};
export { CodeEditor };
