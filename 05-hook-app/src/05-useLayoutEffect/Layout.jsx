import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples/components";

export const Layout = () => {

  const { counter, increment } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading
          ? (
            <LoadingQuote />
          ) : (
            <Quote author={author} quote={quote} />
          )
      }

      <button
        onClick={() => { increment(1) }}
        disabled={isLoading}
        className="btn btn-primary">
        Next Quote
      </button>

    </>
  )
}
