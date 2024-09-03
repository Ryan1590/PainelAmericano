import { jwtDecode } from "jwt-decode"

export const verificaTokenExpirado =
    (token?: string | null) => {

        if (token) {
            const decodedToken = jwtDecode(token)

            if (
                !decodedToken.exp
                ||
                decodedToken.exp < new Date().getTime() / 1000
            ) {

                return true

            }
            return false
        }

    }