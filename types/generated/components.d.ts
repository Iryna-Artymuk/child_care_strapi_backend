import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsSex extends Schema.Component {
  collectionName: 'components_elements_sexes';
  info: {
    displayName: 'sex';
  };
  attributes: {
    Sex: Attribute.Enumeration<
      [
        '\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430',
        '\u0425\u043B\u043E\u043F\u0447\u0438\u043A'
      ]
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.sex': ElementsSex;
    }
  }
}
