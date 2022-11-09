<script lang="ts">
import { Transition, computed, defineComponent, h, ref } from 'vue';
import useBtn, { useBtnProps } from '../../composables/useBtn';
import { hMergeSlot } from '../../utils/render';
export default defineComponent({
  props: {
    ...useBtnProps,
    loadingNormal: Boolean,
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const { classes, style, innerClasses, attributes } = useBtn(props);
    const rootRef = ref('btn');
    const hasLabel = computed(
      () =>
        props.label !== undefined && props.label !== null && props.label !== ''
    );
    function onClick(e: MouseEvent) {
      if (e !== void 0) {
        if (e.defaultPrevented === true) return;
        if (props.loading === true) return;
        emit('click', e);
      }
    }
    const nodeProps = computed(() => ({
      ref: rootRef,
      class: `x-btn x-btn-item non-selectable no-outline ${classes.value}`,
      style: style.value,
      onClick,
      ...attributes.value,
    }));
    return () => {
      let inner = [];
      if (hasLabel.value === true) {
        inner.push(h('span', { class: 'block' }, [props.label]));
      }
      inner = hMergeSlot(slots, inner);
      const child = [];
      child.push(
        h(
          'span',
          {
            class: `x-btn__content text-center ${innerClasses.value}`,
          },
          inner
        )
      );
      return h('button', nodeProps.value, child);
    };
  },
});
</script>
