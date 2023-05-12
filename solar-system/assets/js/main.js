const TOGGLE_ALIGNMENT_MODE_BUTTON = document.querySelector(
  '.toggleSolarSystemAlignmentButton'
);
const VERTICAL_ALIGNMENT_CONTAINER = document.querySelector(
  '.solar-system__vertical-alignment'
);
const HORIZONTAL_ALIGNMENT_CONTAINER = document.querySelector(
  '.solar-system__horizontal-alignment'
);

function toggleAlignmentMode() {
  const { alignment_mode } = TOGGLE_ALIGNMENT_MODE_BUTTON.dataset;

  TOGGLE_ALIGNMENT_MODE_BUTTON.dataset.alignment_mode =
    alignment_mode === 'horizontal' ? 'vertical' : 'horizontal';

  VERTICAL_ALIGNMENT_CONTAINER.classList.toggle('hide');
  HORIZONTAL_ALIGNMENT_CONTAINER.classList.toggle('hide');
}

TOGGLE_ALIGNMENT_MODE_BUTTON.addEventListener('click', toggleAlignmentMode);
