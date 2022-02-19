import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { PER_PAGE } from "../config";

const Pagination = ({ page, total }) => {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <>
      {page > 1 && (
        <Link href={`/gigs?page=${page - 1}`} passHref>
          <Button size="xs">Prev</Button>
        </Link>
      )}
      {page < lastPage && (
        <Link href={`/gigs?page=${page + 1}`} passHref>
          <Button size="xs">Next</Button>
        </Link>
      )}
    </>
  );
};

export default Pagination;
