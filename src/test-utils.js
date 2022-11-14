import {
  queryHelpers,
  buildQueries,
  render as internalRender
} from '@testing-library/react';
export * from '@testing-library/react';

const queryAllByCustomAttr = (container, id, options) =>
  queryHelpers.queryAllByAttribute('data-custom', container, id, options);

const [
  queryByCustomAttr,
  getAllByCustomAttr,
  getByCustomAttr,
  findAllByCustomAttr,
  findByCustomAttr
] = buildQueries(queryAllByCustomAttr);

export {
  queryAllByCustomAttr,
  getAllByCustomAttr,
  getByCustomAttr,
  findAllByCustomAttr,
  findByCustomAttr,
  queryByCustomAttr
};

export const render = (ui, options = {}) =>
  internalRender(ui, {
    ...options,
    queries: {
      ...options.queries,
      queryAllByCustomAttr,
      getAllByCustomAttr,
      getByCustomAttr,
      findAllByCustomAttr,
      findByCustomAttr,
      queryByCustomAttr
    }
  });
