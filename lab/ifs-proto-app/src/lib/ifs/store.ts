import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SAMPLE_FIELD } from "./sample";
import type { Artifact } from "./types";

type BenchState = {
  field: string;
  overlay: boolean;
  running: boolean;
  error: string | null;
  current: Artifact | null;
  archive: Artifact[];
  setField: (field: string) => void;
  setOverlay: (overlay: boolean) => void;
  setRunning: (running: boolean) => void;
  setError: (error: string | null) => void;
  adopt: (artifact: Artifact) => void;
  open: (id: string) => void;
  remove: (id: string) => void;
  clearError: () => void;
};

export const useBench = create<BenchState>()(
  persist(
    (set, get) => ({
      field: SAMPLE_FIELD,
      overlay: false,
      running: false,
      error: null,
      current: null,
      archive: [],
      setField: (field) => set({ field }),
      setOverlay: (overlay) => set({ overlay }),
      setRunning: (running) => set({ running }),
      setError: (error) => set({ error, running: false }),
      clearError: () => set({ error: null }),
      adopt: (artifact) => {
        const archive = [
          artifact,
          ...get().archive.filter((a) => a.id !== artifact.id),
        ].slice(0, 40);
        set({ current: artifact, archive, running: false, error: null });
      },
      open: (id) => {
        const found = get().archive.find((a) => a.id === id);
        if (found) {
          set({ current: found, field: found.sourceField, overlay: found.overlay });
        }
      },
      remove: (id) => {
        const archive = get().archive.filter((a) => a.id !== id);
        const current = get().current?.id === id ? archive[0] ?? null : get().current;
        set({ archive, current });
      },
    }),
    {
      name: "ifs-proto-bench",
      partialize: (s) => ({
        field: s.field,
        overlay: s.overlay,
        current: s.current,
        archive: s.archive,
      }),
    },
  ),
);
