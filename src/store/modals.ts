import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useConfirmModal = create(
	persist(
		(set) => ({
			isOpen: false,
			addIsOpen(isOpen: boolean) {
				set({ isOpen })
			},
			modalType: 'form',
			addModalType(modalType: string) {
				set({ modalType })
			}
		}),
		{
			name: '_kfc_modal_confirm', // unique name
			storage: createJSONStorage(() => sessionStorage),
			partialize() {
				return ({ isOpen: false })
			}
		}
	)
)
