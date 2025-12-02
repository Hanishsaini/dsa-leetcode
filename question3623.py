class Solution:
    def countTrapezoids(self, points):
        MOD = 10**9 + 7
        from collections import defaultdict

        freq = defaultdict(int)

        # Count how many points exist on each horizontal line (same y)
        for x, y in points:
            freq[y] += 1

        # Count horizontal segments on each level = C(n,2)
        seg = []
        for y in freq:
            c = freq[y]
            if c >= 2:
                seg.append(c * (c - 1) // 2)

        if len(seg) < 2:
            return 0

        # Count all pairs: seg[i] * seg[j] for i < j
        total = sum(seg)
        ans = 0

        for s in seg:
            total -= s
            ans = (ans + s * total) % MOD

        return ans
