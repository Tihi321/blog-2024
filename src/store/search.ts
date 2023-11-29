import { get } from "lodash";
import { createSignal } from "solid-js";

export const [search, setSearch] = createSignal(get(location, ["search"]).replaceAll("?", ""));
