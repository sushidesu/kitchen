import { css } from "styled-components"

export type Props = JSX.IntrinsicElements["input"] & {
  label?: string
}

export function Input({ label, ...inputProps }: Props): JSX.Element {
  return (
    <div
      css={css`
        & > label + input {
          margin-top: 0.2em;
        }
      `}
    >
      {label && (
        <label
          css={css`
            display: block;
            font-weight: bold;
          `}
        >
          {label}
        </label>
      )}
      <input
        {...inputProps}
        css={css`
          padding: 2px 4px;
        `}
      />
    </div>
  )
}
