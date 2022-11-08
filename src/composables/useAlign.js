import { computed } from 'vue';

export const alignMap = {
  left: 'start',
  center: 'center',
  right: 'end',
  between: 'between',
  around: 'around',
  evenly: 'evenly',
  stretch: 'stretch',
};

export const alignValues = Object.keys(alignMap);

export const useAlignProps = {
  align: {
    validator: (v) => alignValues.includes(v),
  },
};

// eslint-disable-next-line func-names
export default function (props) {
  return computed(() => {
    // eslint-disable-next-line
    const align =
      props.align === void 0
        ? props.vertical === true
          ? 'stretch'
          : 'left'
        : props.align;

    return `d-flex ${
      props.vertical === true ? 'align-items' : 'justify-content'
    }-${alignMap[align]}`;
  });
}