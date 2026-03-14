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
            // 地图对象：隐世修所
            name: "隐世修所",
            heroes: [
                {
                    // 英雄对象：猎枭
                    name: "猎枭 (Sova)",
                    skills: [
                        {
                            // 技能点位对象 1
                            skill: "A包点深处探测箭", // 技能名称
                            type: "探测",                // 技能分类，例如探测、秒杀箭等
                            side: "进攻",               // 阵营：进攻 / 防守
                            power: "2格蓄力", 
                            bounce: "1次弹跳",
                            pos: "A外台阶角落",         // 站位描述
                            aim: "对准树枝拐角处",       // 瞄准参考
                            effect: "探测A大",          // 技能效果说明
                            img_pos: "images/haven_sova_a_1_pos.png",    // 站位图
                            img_aim: "images/haven_sova_a_1_aim.png",    // 瞄准图
                            img_effect: "images/haven_sova_a_1_eff.png"  // 效果图
                        },
                        {
                            // 技能点位对象 2
                            skill: "C包点防拆秒杀箭",
                            type: "秒杀箭",
                            side: "进攻",
                            power: "2格蓄力", 
                            bounce: "1次弹跳",
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
            // 地图对象：幽邃地窟
            name: "幽邃地窟",
            heroes: [
                {
                    name: "猎枭 (Sova)",
                    skills: [
                        {
                            skill: "A包点探测箭",
                            type: "探测",
                            side: "进攻",
                            power: "满格蓄力", 
                            bounce: "1次反弹",
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