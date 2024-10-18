import { Monaco } from '@monaco-editor/loader';
/**
 * getOrCreateModel is a helper function that will return a model if it exists
 * or create a new model if it does not exist.
 * This is useful for when you want to create a model for a file that may or may not exist yet.
 * @param monaco The monaco instance
 * @param value The value of the model
 * @param language The language of the model
 * @param path The path of the model
 * @returns The model that was found or created
 */
declare function getOrCreateModel(monaco: Monaco, value: string, language: string, path: string): any;
export { getOrCreateModel };
