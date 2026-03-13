/**
 * ---------------------------------------
 * VALORANT 技能点位数据库
 * ---------------------------------------
 * 注意事项：
 * 1. 每一项后面记得加逗号 (,)
 * 2. img 路径建议使用英文命名，并存放在 images 文件夹下
 * 3. type 建议分类：探测 / 秒杀箭 / 闪光 / 火
 * 4. side 建议分类：进攻 / 防守
 */
const data = {
    maps: [
        {
            name: "隐世修所", // 地图名
            heroes: [
                {
                    name: "猎枭 (Sova)",
                    skills: [
                        {
                            skill: "A包点深处探测箭",
                            type: "探测",
                            side: "进攻",
                            pos: "A外台阶角落",
                            aim: "对准树枝拐角处",
                            effect: "探测A大",
                            img_pos: "images/haven_sova_a_1_pos.png",
                            img_aim: "images/haven_sova_a_1_aim.png",
                            img_effect: "images/haven_sova_a_1_eff.png"
                        },
                        {
                            skill: "C包点防拆秒杀箭",
                            type: "秒杀箭",
                            side: "进攻",
                            pos: "C厅入口大门处",
                            aim: "对准左侧山坡树尖",
                            effect: "防拆秒杀",
                            img_pos: "images/haven_sova_c_1_pos.png",
                            img_aim: "images/haven_sova_c_1_aim.png",
                            img_effect: "images/haven_sova_c_1_eff.png"
                        }
                    ]
                }
            ]
        },
        {
            name: "幽邃地窟",
            heroes: [
                {
                    name: "猎枭 (Sova)",
                    skills: [
                        {
                            skill: "A包点探测箭",
                            type: "探测",
                            side: "进攻",
                            pos: "A外箱子角落",
                            aim: "对准黄线与柱子交界处的右边",
                            effect: "A包全探测",
                            img_pos: "images/abyss_sova_a_1_pos.png",
                            img_aim: "images/abyss_sova_a_1_aim.png",
                            img_effect: "images/abyss_sova_a_1_eff.png"
                        }
                    ]
                }
            ]
        }
    ]
};