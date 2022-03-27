package immutable;

/**
 * 描述：     TODO
 */
public class FinalStringDemo2 {

    public static void main(String[] args) {
        String a = "wukong2";
        final String b = getDashixiong(); // 如果是final是方法获得的，那么编译器无法确定它的值 --> 运行时才确认
        String c = b + 2;
        System.out.println(a == c);

    }

    private static String getDashixiong() {
        return "wukong";
    }
}
