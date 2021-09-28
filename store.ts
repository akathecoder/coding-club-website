import create from 'zustand';

interface AppGlobalState {
    visible: string;
    setVisibleSection: (section: string) => void;
}

const useStore = create<AppGlobalState>((set) => ({
    visible: '',
    setVisibleSection: (section: string) => set(() => ({ visible: section })),
}));

export default useStore;
