import { View, Text, StyleSheet, Image } from "react-native";
import { List, Avatar } from "react-native-paper";

//import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../../../utils/date";
import { theme } from "../../../../infrastructure/theme/index";

function PhotoCard() {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.text}>photos</Text>
        <Text style={styles.text}>{getFormattedDate(new Date())}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <Avatar.Image
              size={50}
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
              backgroundColor={theme.colors.brand.primary} //"#2182BD"
            />
          </View>
          <View style={styles.image}>
            <Avatar.Image
              size={50}
              source={{
                uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxETEREREBEQEBARERAQEA4PDhAODhAQFhIYGBYSFhYaHysiGhwoHxYWIzQjKCwuMTExGSE3PDcvOyswMS4BCwsLDw4PGRERGTAfHx8uLjAuMDAwMC4wLjAuMDAwMDAwLjAwMDAwMC4wMDAwMDAwLjAuMDAwMDAuMDAuMDAwLv/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQAGB//EADcQAAIBAgUCBAUCBQMFAAAAAAABAgMRBAUSITFBURMiYXEGMoGRobHBI0JS4fEzgvAUYnKS0f/EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMFBAb/xAAzEQACAgEDAgQFAgQHAAAAAAAAAQIRAwQSITFBBSJRgWFxkaHBExQz0eHwBjJCUpKxwv/aAAwDAQACEQMRAD8A8EkSkSkEkaKMSyEiUgkiUiC2CkFYlIJRGoVsCxOkNRCUQ0LuF6SdI1RJUSUDcK0k6RigToDtBuFaSdI3STpDQu4TpJ0jdJOkm0m4ToO0jtJ2km0m4TpIcR+kGUSbSbilWKFV7mhiFyZ0uTOzvzGvpV5AXEGL3DbFMqR0mphUmFWplPDVi8ldXHfKEjwyrMRMsVEJqorLBLiAw3IBhIckWadNWAowuM0AZCNINVINLYrze5EQGxx1zgkNZIlIlIJI0jEbISCSJSDSGFbISCUSVENRDQjkCokqIxRCURqEchaiSohqISiNQu4DSdpGKIWklC7hWk7SO0naQ0gbhWk7SOUH2YfgMDcUMoyfRFfSRpLUcP3HRpIqnmjE6MWmyT+BQ0PsBOL7GlOCEVEin90m6Oj9hKrsx8TEy5Lc2sbEx6nJy5ncrO7Tx2xoVNi2MmhZWi8Oi9zXwvymNT5NnL+C6CtUc+WW1piMQtynVZdzBWZnSmUVTOhO0QTGJyJjyQJboQsNlS6gYdbBV69thQlSfNhconSnuc2MAHwzgtziENaAxIXTQ+KNWJgyZCiHGJMYhxiOkVORCiGokxiGojUI5AqISiGohKI1CbgFEJRDUSVEIjkAok6Q9JNiA3C9IylEmxMVuLONqhsWTbJNhxQdkDNCozaMjLKUZHpcMYSjYyTsRFip1w4z2KtzbL9iSBqSFpEuZ2odJPkrba4KGYdTCqPc3sfDZmDUW4JX3Iq7ASFMfNCJICGIjyauXyMov5fUStctxyplOaG5FzMKe1zInE3MVNOJk1I7lc3yWQVIGnHY6S3IvYhsA5YpVrIRWnch8CyJEIJiyGzkgkGXOAOBRLNmMh8GUosfRkaUZ8mHOFFyCGRQNJDkjoRySYOy5GQE5hJKndc7mdlmP3tIqWeO/aXvST/SWQ2UgkiIO6uhiR0HCyEgkiUjgi2RYlILQakKMKNPW4xlN3+ZXS9LHFrNfi0sN0+W3SS6tmn4f4Tn109uOkl1b6L6epktEpGgkp8xj9Lr7Cq+GcN7Xj/Va337FGn8X0+d7F5Zej/FWn8up2av/Dmr0q3SqUfWN8fNOmvuviK5FzpXGwkgpI6MkYyVnPgnkjKjKxEGncGNaysPxRl1pszmkuDYTb5LUpXDo3uKwquaNKmhoxtiznRRx1rHn63LPQZotjz8luCfUGPlAuIioiy2DNCplhVGUaliZxFIIDSjUuitUluOw8dgKlPcQImTOQc0KTCiBXAaCsGohIICImtyUEh1jjjgEL0GXMNAVSp7lykaUIGJmnZYpIaxUBNHEeZwl9C9yqjj2t212FZrU8iMWLtuama8Je/6GUZWTibN7A7xx+RvZRjLqzNvCwTkk3ZN7vsurPG4Gtpkj1eBq3V/dHfiyuWN+qT+tGXqNPGGeLa8jav5Xz9i/jsIotSg26cuL7tenuV4wIoZjoqOElenNeZdn0kg8TenLm8X8kuU0Zmj8RnKP6WX/Ol1/wB39V3+vrW54l4FjxZP1sP8Nv8A43/59Pp6B4aN5xXqvsi/nLvTRn5TNyq+a20ZNNfuaOYryIwvFdS8moxpqtv5Z6XwTSLBhk009z6r0SpfkDAx8q9l+hfoLp36FLBLZe1i7Ax8kqkzYl0KWIytynZWSe6mu3qjVw9BQjoXe7dldv1YjHZzChHRK712l5Um1bb9/wACamcw8OU4Xc7bRlFqV2dss+qzQhituL/7+fVozf22HHOWdQSfr+a7e3UxM9jHxpqPpdLo7bmPWoXLFTxLuUoz3d3Jrv1FOquejvZ9Hbk9NiSjBRu6VWeWyycpylW223ROGjYt06hTUhsGWQKsj4Ox6ujz+JVmbeMnszBxE7sWfUMOgsibCgDVQEOLlIGmrsmQMJWYwDUw0dheIOw1QKsivuN2KlQWoliUQNIwBbI1htC5kRA0rgyREJHSkEgJxxwSGvQuy3STJoYctQpGpCJ57JkVg04lbMaNvOuUaKiga9O8Wh5xuLRVjy7ZpmLjKylCL6p7mbJFvE09La6FWXJkybbbZvQSikl0Iiz0uUVvIeZit7H0P4f+FKc6Kk8VT1Nbw+S31YrzrFy+50w0k9RxFdPXojDniIuai3u9k+z7GhTl5NE91yu8GaWI+FMFT81WrB+nit/oWqNPAyi5a5WXZO1vqZGpnvlugmvtz69fr/U9PoMbxYXizVJdFVvj0dpe307Ir5RQowhe85VptxV1ppwgt/8AdJ/gfi15EY+PznCxbjSpyqR/7tivLPqkklGMYx6J3kzi1GDPmyKcvwuh06d6fDHZi6da5fU38GvL9S7SjujzeBzqUbqcVJPrHY062cRUY+FvJq93xH09zhy6bKpVXX6HRu3Lgp5jFTrSlLffTCPRRj1KOJpUlvJu/pJx37JIXicY4qUm+Fu/TsYeGxMqk9Un7LokbWk0sptXKkjO8R8Qhp4VGNyfS/h3ZsPMqkE1CckujlJya+rM2vi6k5LxJynbjVJyt7X4LWISsZ8+TWWDHjdxil7c/U81LV5s/wDEm378fTp9i9QluWVLcoUJDZVGXI5pdR2KjeLMHFR3NqdXymNinuVy6lkFSF0gqsBcWPTuhRilIEfXgIHQC1h5DmyrhmXNOwjCLkjoRuDUmdSnYhBVeLTAUblmpZieBiC9JziTKQNyEIucccEh6qiyzFGfQql2FVGvGXB5fJF2E2TBleviUkVqWLvLYDmkwxxNoXnNCzuY8j02Y0tVO/Wx5qaszOzRqTNrTy3Y18A8Kk5xv3R7HFUo6Uot8K7TPFUZWkn2Z7HBpyjDSr6krIyNc2nF36np/A1GSmu/AWCw8KktKhJtLeUvlX1/sPrPwf8AUWmN0k7eVpu37mzg8NGnG1ld7yZh/EWPdWFWmv8ATjG7fdp9DIx5P1su3/T3Nxt44Nx6pP7K/wAGdmuC0vVFeV8+hSpStsaWTY+NSlGNR+ZLTK/DXRlfMsF4crLdcp90zQxzcZfpZOq+9GdklGSWXH0fPyOpy6dzTqxtCElxKLt6Wk1b8L7mNSZcxOYxp4ZJ/NFy0Lq27be2wuXG247eefwNDV7U3J0kjFzzH3cqUeE7SfdroV8DVsVHGUnfdtu76tth04yTs00+zTubOOKxqkeaz5JZpOUu/wDdGzUxPlKanciMXbcmlELlYkYUW6KGsBOyJhNNiObosUEnYqvKyM+ozSxULozakWCLBJUwInSlYKmgayGFInK5XY2wuQ4AqPJoQ4M+jyaFCOwsgor1FuCPxFKxTlIiIPigJg06h1QlEFMKCJ0k8BIRY4C5wSGxCoWI1jNhVGOsXrIzilgT7E4vEMjLnvdlTETuFhq9hN/Nst/RSjVHqVKLp2vuedx9O0n7jVj/AFF1amq5Jz3C48Wyym0en+F85VNRU4N221J9/Q81Wj1GYatpfocmfEssdrVnbotS9PltPqe+x+dRcJKF1fqzydbMdTnSW8XGV33dinicwlJWQOTRvNt/0yv9jl02hhhTdfE09V4lLItmPhPr/IPDwnFXW11dP/nuFSzJ3tON/WL/AGZr16UPCi+yPP1/mdjs2xmvMjO3Sxvysu18yUfli7vvawdPByxFWnFPmOpvpGPLESy+q6Tm4NRS1JtWulzb6Gt8KzSpVan8ytD2ja/7/g5sso4sbnj5a49eXxz8jt00J5ssceVNRfm9OF6fPobWQ5dShTUoxTcm7SkruyLOY5PSrx3SU1vGaVmmVvh2tqoxX9MpL8m3QRgZcuSGdvc7TPSRhjlhUdq2tdO39/c8JjsvlTunZ26rb8FCDsz1+OyqlOo5VKyjdu0VyYmcfD84rXSfiR6pfMbWHWwk1Gbpv2Rh6rwyWO5Yk2l7sy51rjKMrGe5NMt4WVzvaoyLsvT8yRn4mFma8aUbGXmMrcCR6hnwinqAlK4UocPurg2LUVk6REy2qb0Sn0TS+rKkwogdFO5oYeVilQHqYJckLFd3RRrLVf8Aq5/8l/8AS05bFSpdO62s9mCJGdQiTVNn4YwdGtXUKqtTq05p22cJq267dWW8X8G1PHnRpVYOCj4kalR6fJte/dpu234JfIVFtHmYkVUbWcZdGOmnCcJSp3i3G6v3Tfvd/UyqWFlJ2aatzsFcgargq2JNaOXq3yP6tnBslD8BkzavPb8DMTkyt5GaVaXROwyjTekyZarInuv2PRLw/Bt27fczn8KvwvEcm9voefnSs2j1eNzWVOjKEpX5S+p5Vzvud2Cc525GXrMWLE1CC5IJpT3IuckdBwsbUWwiLLHQrvkjOaarkNj8E9Kcv6nZCaavt3HYySTUVxFfkW+xbKdRtGlWxF6a9v3MWtyy34nlivQqVgxVBuzUwuczk7VHf9LWtYd8N1FGpWot+WpFpNvrFO34bMJMsYWslUhJ7pW1X6rh/goy6eLhJLi191yjuw62ayY3N3tff0fDR6b4bxkYy8NtXbul623RsY/NXZxpW43kzyGKcITU6bkrST2aaXsbWX0J1NUoVIyU01plHR5vcytTp4Oayvv2fqbukzy5xVe30a6e5zqXW+7ErETpvyvbrF8MfWy2vS3nTko/1K0o/dcFavUiovq3xbcdRXTqmdzmpRu6oy84UZS1xWm/zL1KNKo0y1irtW7tIbiMmlGCmjUxcRSPK6ynmckuvJEMY7WEVXqvbdrlE4PCTqOy2IxuHdKor8NNN+v/ACw6RytiK8ldeit9tgLhYi2yXRL2FxkOlwVt8lulvRqx6pxn+xns0cI1ez+WacX9ePyUa8NLa7MkSdyxgMJOpqUEnpWp3dtjboYGjKEVOChPRG8lKS34e17cp9DzmHryhK6f9z00K/i0I1IfPR2qR6uD4l9H+ok7XKLYV3KtTJp64xpuM1N2i7oz8wwc6btNW9ejLyxFpX6fob2T1aNWNSGIgqmmPiwT6uLV4v09AJ9yUefwmGr4dU8TKFqepPdpSs1b5ed4tnosXUlKEZ380N4yXZlD4lxLntfy67JWtpVuF6D8knrwqvzHVB/7Xt+LCSfR+w8VTr3/AJmOr6n3k/zcfXqKCSik5cK3fuDKPn+9vcHDq8nN/wAqsvcKlxZJIr6Kr/ycTXrvU7Pt+hAN7+ANqNCng6nMpbegvE5i4rTHlfZGUs2nazbETxN9yqOnlfnNTJr4KNY7sdi67ly7lZIhzI1nXFUuDJnNzlbCucBKRykGhC1h900JrLcnDy3OxASqaOw8rO/bcGrO7b7gJnMFFK54LE5bRFz4udN7IiL2YEWQdigkydJFhiwt31Ky5t8vV+3c7BYqUXZSas+LldK9vQhprcTYqaLlmcWpLqj0Mc5rW2nba2xRrV3J3fO93a12UoTl0bGKUlz+Uc608YvypI0X4i5pKVlqjBylFLltJe5v1ITjBRkvRGTks9VRaKfmX8120mevjScklNbjPyo55zWSVozaGCjBJxW7KmcZLrpVJP54x1R9Wun1VzZxNKSs0uCvnVbTQvPZgjJuiuUFTPBzV43VtrL8C0x/8st/5v2ESZ0o5GOpT8tvsRifOtXX+b37ioM6nVs9+HsyLqC+BRo5Vi/Dmpcx4nHvF8oo1oWfo+BlF7EZYmblfLZOT0NW2cU9rp/5X3HZXgampSbcN7K1m/8ABYyfNI1WlUsqkY2vwpKKsn72/Qt4edpTS4u2vZ8HPuadF6SfJl/EL3ittS1KVurjwyz8NS/hTXao3/7RX9zMzSq5VZX7v8lj4fxGlzj3UZL6Np/qiTXkIn5kyc1p6Zvs90Zkq0kmk+eTfzJKcfXoecrqzGjyhWxUpHAnFgliVAZGBNgkOKBKAKpj0gFswWQRKJA2ULnKkGwWBSe4ysMpUN0lyBiYWduwL5BLoJJBJCUdxjflGYe2md+23vdCU9gqcvLL1svz/YAYdS1Sw2yCqYPYsUnsl2SGTkhbOvaqMmhK178dR7heKK842c16/uN12Vhil8oChPSx9XEJ7Fd83IqQfPQjigqTrgu4PHTpNuHU08Dn9VvdnnYVGg41O2wrjYYTPfUc3Ukr2uZHxTjlNJJmBDGTS2Yiddt7u7K44ubZbky+WgXtv0fJFSKvsWfDTRSba2fQuRTJUFcC+5xCQQIdTepaXyuGBCVtiYwezQdale0l9SBDw9W0rp29TTwOYOCcXx0fYyqUBiYklY6dD61W8rvuK/6l06qkuLWftcW5C8Q7/YiiDdwbc8XqV0zOxdRN3XXkqus1xsC6pFGgt2MuSJ1nDAsemdc44DKidQM+TjiIKCQSkccAFljCNXb7IqTnqu/VnHAQX0K8kQccWIrXUODOjz9UccQPc01INMg4rOpGfiH/ABJepaq4P+Cp3819zjiSbVCRSdlSluMbaTXpc44sZX3KvJyIOIGu42nvfvZW97r+4dTCTW7W3ujjgXyRkxqisRu7/RnHBHYFMlxJOIIxtGVkxsJp+xxwBlyiUuV1QioScTuR9BadzpHHBEJqISyTiIcg444JD//Z",
              }}
              backgroundColor={theme.colors.brand.primary}
            />
          </View>
          <View style={styles.image}>
            {/*  <Avatar.Image
              size={50}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6bZMOCVGXGWmAzgHwOxq-A4lUTNWke-GiixH6D-bGEbFehiPcwzukWlhnbXlqyXeejk&usqp=CAU",
              }}
              backgroundColor="#2182BD"
            /> */}
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6bZMOCVGXGWmAzgHwOxq-A4lUTNWke-GiixH6D-bGEbFehiPcwzukWlhnbXlqyXeejk&usqp=CAU",
              }}
              style={{ height: 50, width: 50 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default PhotoCard;

const styles = StyleSheet.create({
  container: {
    //padding: 8,
    marginLeft: theme.space[2], //12,
    height: theme.sizes[8], // 170,
    backgroundColor: theme.colors.ui.primary50, // "#3e04c3", // GlobalStyles.colors.primary50,
    borderRadius: theme.sizes[1], //6,
    //  marginTop: 40,
    //flexDirection: "row",
    justifyContent: "center", //"space-between",
    alignItems: "center",

    ///padding: 12,
    //marginVertical: 8,
    backgroundColor: theme.colors.ui.primary500, // "#3e04c3", //GlobalStyles.colors.primary500,
    // flexDirection: "row",
    // justifyContent: "space-between",
    //borderRadius: 6,
    elevation: 3,
    shadowColor: theme.colors.ui.gray500, //"#39324a", // GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },

  imageContainer: {
    padding: theme.space[2], //8,
    //backgroundColor: "#e4d9fd", // GlobalStyles.colors.primary50,
    // borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    padding: 1,
  },

  headingContainer: {
    padding: theme.space[2], // 8,
    marginLeft: theme.space[3], //18,
  },
  text: {
    fontSize: theme.fontSizes.body, // 16,
    color: theme.colors.ui.primary50, //  "#ffff", //"#5721d4", //GlobalStyles.colors.primary400,

    //color: theme.colors.ui.primary50,
    fontFamily: theme.fonts.body,
    //fontSize: theme.fontSizes.body, //16,
    //padding: 4,
    fontWeight: "bold",
  },
});
