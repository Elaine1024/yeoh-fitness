// ── Yeoh 健身日历 · 数据中心 ──
// 格式：fitnessData.logs["YYYY-MM-DD"] = { foods: [...], exercises: [...] }

window.FITNESS_DATA = {
  profile: {
    name: "",
    age: null,
    height: null,
    weight: null,
    bodyFat: null,
    muscle: null,
    bmr: null,
    tdee: null,
    calorieTarget: [1200, 1300],
    proteinTarget: 85,
    measurements: null
  },

  weekTemplate: [
    { dayName: "周日", type: "rest", label: "休息", color: "#d1d5db", coach: false, exercises: [] },
    { dayName: "周一", type: "strength", label: "力量日", color: "#3b82f6", coach: false, exercises: [] },
    { dayName: "周二", type: "rest", label: "休息", color: "#d1d5db", coach: false, exercises: [] },
    { dayName: "周三", type: "strength", label: "力量日", color: "#10b981", coach: false, exercises: [] },
    { dayName: "周四", type: "rest", label: "休息", color: "#d1d5db", coach: false, exercises: [] },
    { dayName: "周五", type: "strength", label: "力量日", color: "#d97706", coach: false, exercises: [] },
    { dayName: "周六", type: "rest", label: "完全休息", color: "#d1d5db", coach: false, exercises: [] }
  ],

  specialAdjustments: {},

  logs: {}
};
