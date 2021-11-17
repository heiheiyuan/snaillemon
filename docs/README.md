---
home: true
heroImage: /assets/lemon.png
actionText: 开始 →
actionLink: /blog/
features:
- title: ⌛ 沉淀
  details: 经历过的才最真实,何其宝贵之记录必须写写.
- title: 🚀 别卷了
  details: 我就慢慢来,躺平的快乐你们在医院躺平的时候大概才懂.
- title: 🎯 持久
  details: 正所谓活到老学到老,请问学习这件事您持久吗?
footer: MIT Licensed | Copyright © 2021-present GOODBOY
---

---

🔪  小试牛刀

---

### 荷兰国旗

> 小于等于目标数字的放左边，大于目标数字的放右边

**实现思路:**

1. 标记小于等于目标数据的位置，命名为左边界位置,当出现目标数据，向右移动一位
2. 当出现大于目标数据时，左边界位置不变,继续向右寻找，直至找到目标数据，将左边界位置向右移动，并将当前找到的目标数据与最新左边界位置的数据做交换

> TALK IS CHEAP
``` java
/**
* 小于等于目标数字在左边，大于在右边
*/
@Test
public void heLanQi() {

    int[] arr = {1, 3, 3, 5, 6, 7, 8, 4, 5, 2, 5};
    // 目标数字 5
    int target = 5;
    // 左边边界
    int left = -1;
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] <= target) {
            left++;
            if (i != left) {
            arr[i] = arr[i] ^ arr[left];
            arr[left] = arr[i] ^ arr[left];
            arr[i] = arr[i] ^ arr[left];
        	}
    	}
    }
	System.out.println(Arrays.toString(arr));
}
```

> 扩展：小于放左边 等于放中间 大于放右边
>
> 小于边界位置
>
> 大于边界位置
>
> 如果小于，小于边界位置向右移动，并将当前游标所指数字与最左边界数字交换，游标继续向右
>
> 如果等于，位置均不变，游标继续向右
>
> 如果大于，大于边界位置向左移动，并将当前游标所指数字与最左边界数字做交换，游标位置不+1，继续循环比较

```java
/**
* 小于目标数字在左边，等于目标数字在中间，大于目标数字在右边
*/
@Test
public void heLanQiExtend() {
    int[] arr = {1, 3, 3, 5, 6, 7, 8, 4, 5, 2, 5};
    // 左边界
    int left = -1;
    // 有边界
    int right = arr.length;
    // 目标数字
    int target = 5;
    for (int i = 0; i < arr.length; i++) {
        if (i == right) {
        	break;
        }
        if (arr[i] < target) {
            left++;
            if (i > left) {
                arr[i] = arr[i] ^ arr[left];
                arr[left] = arr[i] ^ arr[left];
                arr[i] = arr[i] ^ arr[left];
            }
        }
        if (arr[i] > target && i < right) {
            right--;

            arr[i] = arr[i] ^ arr[right];
            arr[right] = arr[i] ^ arr[right];
            arr[i] = arr[i] ^ arr[right];
            i--;
        }
    }
    System.out.println(Arrays.toString(arr));
}
```

*快去想想快速排序如何实现吧~*