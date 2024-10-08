export interface BreadcrumbConfigType {
    title: string;
    route: string;
    children?: BreadcrumbConfigType[];
}
export interface BreadcrumbType {
    breadConfig: BreadcrumbConfigType[];
}
