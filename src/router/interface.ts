import { ReactNode } from 'react';
import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

type MyRouteOption = {
  options?: {
    title?: string;
    showNav?: boolean;
    icon?: ReactNode;
    // role?: UserRoleEnum[];
  };
};

type CustomIndexRouteObject = IndexRouteObject & MyRouteOption;
type CustomNonIndexRouteObject = Omit<NonIndexRouteObject, 'children'> &
  MyRouteOption & {
    children?: (CustomIndexRouteObject | CustomNonIndexRouteObject)[];
  };

export type MyRoute = CustomIndexRouteObject | CustomNonIndexRouteObject;
