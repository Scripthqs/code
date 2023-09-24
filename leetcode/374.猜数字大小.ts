/*
 * @lc app=leetcode.cn id=374 lang=typescript
 *
 * [374] 猜数字大小
 *
 * https://leetcode.cn/problems/guess-number-higher-or-lower/description/
 *
 * algorithms
 * Easy (52.14%)
 * Likes:    298
 * Dislikes: 0
 * Total Accepted:    158K
 * Total Submissions: 303K
 * Testcase Example:  '10\n6'
 *
 * 猜数字游戏的规则如下：
 *
 *
 * 每轮游戏，我都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。
 * 如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。
 *
 *
 * 你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有 3 种可能的情况（-1，1 或
 * 0）：
 *
 *
 * -1：我选出的数字比你猜的数字小 pick < num
 * 1：我选出的数字比你猜的数字大 pick > num
 * 0：我选出的数字和你猜的数字一样。恭喜！你猜对了！pick == num
 *
 *
 * 返回我选出的数字。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 10, pick = 6
 * 输出：6
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1, pick = 1
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：n = 2, pick = 1
 * 输出：1
 *
 *
 * 示例 4：
 *
 *
 * 输入：n = 2, pick = 2
 * 输出：2
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 *
 *
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
function guessNumber(n: number): number {
  //采用二分查找
  let low = 1;
  let high = n;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      low = mid + 1;
    } else if (res === -1) {
      high = mid - 1;
    }
  }
  //采用递归方法
  // const rec = (low: number, high: number) => {
  //   const mid = Math.floor((low + high) / 2);
  //   const res = guess(mid);
  //   if (res === 0) {
  //     return mid;
  //   } else if (res === 1) {
  //     return rec(mid + 1, high);
  //   } else if (res === -1) {
  //     return rec(1, mid - 1);
  //   }
  // };
  // return rec(1, n);
}
// @lc code=end
