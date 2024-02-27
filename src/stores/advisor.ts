import type { AdvisorItem } from "@/type";
import { defineStore } from "pinia";
export const useAdvisorStore = defineStore('advisor',{
    state: () => ({
        advisor: null as AdvisorItem | null
    }),
    actions: {
        setAdvisor(advisor: AdvisorItem) {
            this.advisor = advisor
        },
    }
})