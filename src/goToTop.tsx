export function GoToTop(): JSX.Element {
  return (
    <button
      class="go-to-top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    >
      Go to top
    </button>
  );
}
