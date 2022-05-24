package immutable;

/**
 * 描述：     TODO
 */
public class FinalStringDemo1 {

    public static void main(String[] args) {
        String a = "wukong2";
        final String b = "wukong";
        String d = "wukong";
        String c = b + 2;
        String e = d + 2; // 这个值要运行时才知道
        System.out.println((a == c));
        System.out.println((a == e));
    }
}
